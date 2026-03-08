const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookmarkButton = document.getElementById("add-bookmark-button");
const categoryName = document.querySelectorAll(".category-name");
const dropdown = document.getElementById("category-dropdown");
const closeFormButton = document.getElementById("close-form-button");
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form");
const inputName = document.getElementById("name");
const inputUrl = document.getElementById("url");
const bookmarkList = document.getElementById("bookmark-list-section");
const viewCatagoryBtn = document.getElementById("view-category-button");
const categoryList = document.getElementById("category-list");
const closeListBtn = document.getElementById("close-list-button");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");


const getBookmarks = () => {
    const value = localStorage.getItem("bookmarks")
    if (value === null) return []
    try {
        const result = JSON.parse(value)
        if (Array.isArray(result)) {
            const arr = ["news", "entertainment", "work", "miscellaneous"];
            const isValid = result.every(item => typeof item === "object") && result.every(item => "name" in item && "category" in item && "url" in item && arr.some(ele => ele === item?.category) && item?.name !== "" && item?.url !== "")
            return isValid ? result : []
        }
        return []
    } catch (e) {
        console.error(e)
        return [];
    }
}

console.log(getBookmarks())

function reset() {
    inputName.value = "";
    inputUrl.value = ""
}

const displayOrCloseForm = () => {
    mainSection.classList.toggle("hidden")
    formSection.classList.toggle("hidden")
}

const displayOrHideCategory = () => {
    mainSection.classList.toggle("hidden")
    bookmarkList.classList.toggle("hidden")
}

const displayBookmarkByCategory = () => {
    const bookmarks = getBookmarks();
    const hasBookmark = bookmarks.some(ele => ele.category === dropdown.value);

    let str = "";
    bookmarks.forEach(ele => {
        if (ele.category === dropdown.value) {
            str += `<input type="radio" id="${ele.name}" value="${ele.name}" name="${dropdown.value}"><label for="${ele.name}"><a href="${ele.url}">${ele.name}</a></label>`
        }
    })
    if (!hasBookmark) {
        categoryList.innerHTML = `<p>No Bookmarks Found</p>`
    } else {
        categoryList.innerHTML = str
    }
}

addBookmarkButton.addEventListener("click", () => {
    categoryName.forEach(title => {
        title.innerText = dropdown.value
    })
    displayOrCloseForm()
});

closeFormButton.addEventListener("click", displayOrCloseForm);

addBookmarkButtonForm.addEventListener("click", () => {
    let currentArr = getBookmarks()
    const bookmarkObj = {
        name: inputName.value.trim(),
        category: dropdown.value,
        url: inputUrl.value.trim()
    }
    currentArr.push(bookmarkObj)

    localStorage.setItem("bookmarks", JSON.stringify(currentArr));

    reset()
    displayOrCloseForm()
})

viewCatagoryBtn.addEventListener("click", () => {

    categoryName.forEach(title => {
        title.innerText = dropdown.value;
    })


    displayBookmarkByCategory()
    displayOrHideCategory()
})

closeListBtn.addEventListener("click", displayOrHideCategory);

deleteBookmarkBtn.addEventListener("click", () => {
    const radioes = document.querySelectorAll(`input[type="radio"]`);
    const currentArr = getBookmarks();
    let indexOfCurrentArr;
    radioes.forEach(item => {
        const ischecked = item.checked;
        if (ischecked) {
            indexOfCurrentArr = currentArr.findIndex(obj => obj.name == item.value && obj.category === dropdown.value);
        }
    })
    currentArr.splice(indexOfCurrentArr, 1)
    localStorage.setItem("bookmarks", JSON.stringify(currentArr));
    displayBookmarkByCategory()
}
)

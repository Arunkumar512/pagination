const { useState } = require("react")

const Pagination =()=>{

const[currentPage, setCurrentPage]=useState(1)
const totalDataPerPage=10;
const lastIndex=currentPage*totalDataPerPage;
const firstIndex=lastIndex-totalDataPerPage;
const record= post.slice(firstIndex,lastIndex);

const npage= Math.ceil(post.length/totalDataPerPage)

const number=[...Array(npage+1).keys()].slice(1)

}
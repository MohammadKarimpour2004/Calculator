let input = document.querySelector("input");
nums = "";
function data(val){
    input.value += val
}
function nategeh(ntg) {
        nums += input.value
        input.value = ''
        nums += ntg
}
function creates(){
    nums += input.value
    input.value = eval(nums)
}
function deletes(){
    input.value = input.value.slice(0,-1)
}
function clears(){
    input.value = ''
    nums = ''
}

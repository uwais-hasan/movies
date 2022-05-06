

const ControllerWithGenres=(selected)=>{
if (selected.length<1){
    return '';
}else {
  return   selected.map(item=>item.id).reduce((acc,cur)=>acc+','+cur)
}

}
export default ControllerWithGenres;
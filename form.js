function AddField(){
    let labelText=document.getElementById('text').value
    let inputType=document.getElementById('input-type').value

    let container =document.createElement('div')
    let label=document.createElement('label')
    //label=labelText
    let input =document.createElement('input')
    input.type=inputType
    label.innerText=labelText+":";

    container.appendChild(label);
    container.appendChild(input);
    let form=document.getElementById('Pre').appendChild(container)
    //label.innerText="";
    document.getElementById('text').value=""

}
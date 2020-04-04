
var items=$('#items');

$("form button").click(function(event){
    let roll=$('#rollnumber_input');
    let name=$('#Name_input');
    let marks=$('#marks_input');

    let rollval=roll.val();
    let nameval=name.val();
    let marksval=marks.val();

    event.preventDefault();

    if (rollval === "" || nameval === "" || marksval === ""){
        alert("please fill all the details");
    }
    else{
        let item= '<div class="items">Roll no - <span class="highlight">' + rollval + '</span> , <span class="highlight">' + nameval + '</span> have got <span class="highlight">' + marksval + '</span> marks</div>';
    items.append(item);

    roll.val("");
    name.val("");
    marks.val("");
}
});

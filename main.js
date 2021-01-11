function getPara()
{
    var inputs = [];
    for(var i = 1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("get_para_1" + i).value);
    }
    document.getElementById("Para_1").innerHTML = inputs.join(". ")
}
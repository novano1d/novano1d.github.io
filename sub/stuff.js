var fnum;
var value ;
var prevValue;
var final; 
var textboxText = "0";
function calculate()
{
    fnum = document.getElementById('fnum').value;
    console.log(fnum);
    prevValue = 0;
    value = 0;
    var i; 
    for (i = fnum; i > 1; i--)
    {  
        var temp = value;
        value += prevValue;
        prevValue = temp;
        if (value == 0)
        {
            textboxText = 0;
            value++;
        }
        textboxText = textboxText + ", " + value;
    }
    console.log(value);
    document.getElementById('output').value = textboxText;
}

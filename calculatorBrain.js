var result = document.getElementById("result");
var FirstNumberadd=0;
var FirstNumbersub=0;
var FirstNumbermult=0;
var FirstNumberdiv=0;

function onNumberClicked(numberButton){
    
    if(result.innerHTML == "0")
    {
        result.innerHTML = numberButton.innerHTML;
    }
    else
    {
        result.innerHTML += numberButton.innerHTML;
    }
}

function onClearClicked()
{
    FirstNumberadd=0;
    FirstNumbermult=0;
    FirstNumberdiv=0;
    FirstNumbersub=0;
    result.innerHTML = "0";
}

function onEqualsClicked()
{
    if (FirstNumberadd>0)
    {
    result.innerHTML=FirstNumberadd+Number(result.innerHTML)
    }
    else
    {
        if (FirstNumbersub>0)
        {
            result.innerHTML=FirstNumbersub-Number(result.innerHTML)
        }
        else
        {
            if (FirstNumbermult>0)
            {
                result.innerHTML=FirstNumbermult*Number(result.innerHTML)
            }
            else
            {
                if (FirstNumberdiv>0)
                {
                    result.innerHTML=(FirstNumberdiv/parseFloat(result.innerHTML)).toFixed(2)
                }
                else 
                {
                    result.innerHTML=result.innerHTML
                }
            }
        }
    }    
}

function onDivideClicked()
{
    FirstNumberadd=0;
    FirstNumbersub=0;
    FirstNumbermult=0;
    FirstNumberdiv = Number(result.innerHTML)
    result.innerHTML= 0
}

function onAddClicked()
{
    FirstNumbersub=0;
    FirstNumbermult=0;
    FirstNumberdiv=0;
    FirstNumberadd = Number(result.innerHTML)
    result.innerHTML= 0
}

function onSubtractClicked()
{
    FirstNumberadd=0;
    FirstNumbermult=0;
    FirstNumberdiv=0;
    FirstNumbersub = Number(result.innerHTML)
    result.innerHTML= 0  
}

function onMultiplyCliked()
{
    FirstNumberadd=0;
    FirstNumbersub=0;
    FirstNumberdiv=0;
    FirstNumbermult = Number(result.innerHTML)
    result.innerHTML= 0
}


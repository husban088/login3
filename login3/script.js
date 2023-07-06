var a = 0;
function mouseover()
{
const email = document.forms['supform']['email'].value;
const password = document.forms['supform']['password'].value;


const emailcheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if((!email.match(emailcheck) || password=="" ) && a==0)
{
    buttonmoveleft();
    a=1;
    return false;
}

if((!email.match(emailcheck) || password=="" ) && a==1)
{
    buttonmoveright();
    a=2;
    return false;
}

if((!email.match(emailcheck) || password=="" ) && a==2)
{
    buttonmoveleft();
    a=1;
    return false;
}
else{
    document.getElementById('submit-btn').style.cursor = 'pointer';
    return false;
};
};
function buttonmoveleft()
{
    const button = document.getElementById('submit-btn');
    button.style.transform= 'translateX(-160%)';
};

function buttonmoveright()
{
    const button = document.getElementById('submit-btn');
    button.style.transform= 'translateX(0%)';
};

function resetbtn()
{
    const button = document.getElementById('submit-btn');
    button.style.transform= 'translateX(0%)';
};
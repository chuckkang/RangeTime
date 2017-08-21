

function rangeprint(start, end, skip)
{
var returnstring ='';
if (skip==null || skip==0 || skip == 'empty')
    { skip = 1;}

    if (end == null || end == 0 || end == 'empty') 
    { 
        end = start; 
        start = 0;
        skip = 1;
    
    }
    for (i=start; i<end; i+=skip)
        {
        console.log(i);
        }
        
}

rangeprint(23);
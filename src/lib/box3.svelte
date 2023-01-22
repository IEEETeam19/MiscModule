<script>
    
    import {array} from "../stores/data.js"
    import {OutputArr, flag} from "../stores/outputData.js"


    let oprs = ["all", "int", "frac", "even", "odd"]
    $: opr = -1;
    let arrF = [];
    const fun = () => {
        switch(oprs[opr])
        {
            case "all":
                {
                    arrF = $array;
                }
                 break;

            case "int":
                {
                    let arr3 = [];
                    for(var i=0; i<$array.length; i++)
                    {
                        if($array[i].isInteger())
                            arr3 = [...arr3, $array[i]];
                    }
                    arrF = arr3;
                    console.log(arrF);
                }
                    break;
                
            case "frac":
                {
                    let arr3 = [];
                    for(var i=0; i<$array.length; i++)
                    {
                        if(!$array[i].isInteger())
                            arr3 = [...arr3, $array[i]];
                    }
                    arrF = arr3;   
                    console.log(arrF);
                }
                    break;    
                        
            case "even":
                {
                    let arr3 = [];
                    for(var i=0; i<$array.length; i++)
                        {
                            if($array[i]%2 == 0)
                                arr3 = [...arr3, $array[i]];
                        }
                        arrF = arr3;
                        console.log(arrF);
                }
                        break;
            case "odd":
                {
                    let arr3 = [];
                    for(var i=0; i<$array.length; i++)
                        {
                            if($array[i]%2 != 0)
                                arr3 = [...arr3, $array[i]];
                        }
                        arrF = arr3;
                        console.log(arrF);
                }
                        break;

            default: console.log("Sorry!")
        }
        flag.set(1);
        OutputArr.set(arrF);
    }

    var mul;
    var div;

    $: s = false;
    $: yesM = false;
    $: yesD = false;

    function filterMultiple(){
        var arrM = [];
        for(var i=0; i<$array.length; i++) //01234 => 23456
        {
            if($array[i] % mul == 0)
                arrM = [...arrM, $array[i]];
        }
        flag.set(1);
        OutputArr.set(arrM);
        console.log($OutputArr);
    }

    function divisor(){
        var arrD = [];

        for(var i=0; i<$array.length; i++)
        {
            if(div % $array[i] == 0)
                arrD = [...arrD, $array[i]];
        }
        flag.set(1);
        OutputArr.set(arrD);
        console.log($OutputArr);
    }

    function Sort(){
        if(s === undefined)
        {
            console.log(s);
        }
        var sortArr = [];
        sortArr = $array;
        console.log(sortArr.sort(compareDecimals));

        function compareDecimals(a, b) {
            if (a === b) 
                return 0;

            return a < b ? -1 : 1;
        }
        flag.set(1);
        OutputArr.set(sortArr);
        console.log($OutputArr);
    }

</script>

<main>
    <div class="bg-teal-700 text-white w-96 px-1" style="height: 420px;">
        <p class="text-center font-bold">Filter A List Of Numbers</p>
        <br>
        <div class="flex mx-2 justify-evenly">
            <div class="div1 text-xs" style="width:300px">
                <h4 class="">Number Filter Criteria</h4>
                
                <div>
                    
                </div>
                <div>
                    <label for="op4" class="text-white">
                        <input type="radio" name="Opr" id="all" value={0} bind:group={opr} on:change={fun}>
                            Select All Numbers
                    </label>
                </div>
    
                <div>
                    <label for="op4" class="text-white">
                        <input type="radio" name="Opr" id="int" value={1} bind:group={opr} on:change={fun}>
                            Filter only Integers
                    </label>
                </div>
        
                <div>
                    <label for="op4" class="text-white">
                        <input type="radio" name="Opr" id="frac" value={2} bind:group={opr} on:change={fun}>
                            Filter Only Fractions
                    </label>
                </div>
        
        
                <div>
                    <label for="op4" class="text-white">
                        <input type="radio" name="Opr" id="even" value={3} bind:group={opr} on:change={fun}>
                            Filter Only with Even Numbers
                    </label>
                </div>
        
                <div>
                    <label for="op4" class="text-white">
                        <input type="radio" name="Opr" id="odd" value={4} bind:group={opr} on:change={fun}>
                            Filter Only with Odd Numbers
                    </label>
                </div>
            </div>
    
            <div class="div2 w-35 text-xs" style="width: 250px;">
                <h4 class="">Multiples and Divisors</h4>
                <div class="mt-3">
                    <label for="op4" class="text-white">
                        <input type="checkbox" name="oprI" id="" class="text-xs" bind:checked={yesM}>
                        {#if yesM}
                            {filterMultiple()}
                        {/if}
                        Filter Multiples of N
                    </label>
                    <!-- <p class="text-xs">Pick all elements that are multiples of n</p> -->
                    
                    <input type="text" class="bg-teal-900 mx-1 w-20 rounded" bind:value={mul}>
                    <p class="text-xs">Enter the multiple number(n)</p>
        
                    <br>
        
                    <label for="op4" class="text-white">
                        <input type="checkbox" name="oprI" id=""  bind:checked={yesD}>
                        {#if yesD}
                            {divisor()}
                        {/if}
                        Filter Divisors of M
                        <br>
                    </label>
                    <!-- <p class="text-xs">Pick all elements that are divisors of n</p> -->
                    
                    <input type="text" class="bg-teal-900 mx-1 rounded w-20" bind:value={div}>
                    <p class="text-xs">Enter the number divisor(m)</p>
                </div>
            </div>
            
            <div class="div3 w-35 text-xs">
                <h4 class="">Sorting</h4>
    
                <div class="mt-3">
                    <label for="s" class="text-white text-xs font-bold">
                        <input type="checkbox" name="sort" id="" bind:checked={s}>
                            {#if s}
                                {Sort()}
                            {/if}
                            Sort Numbers
                    </label>
                </div>
                <p class="text-xs">Sort filtered numbers from the smaller to largest</p>      
            
            </div>
    
        </div>
    </div>

</main>
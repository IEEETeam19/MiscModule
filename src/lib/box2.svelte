<script>

    import {array} from "../stores/data.js"
    import {OutputArr, flag} from "../stores/outputData.js"
    
    var nums;
    var fc = false;
    export var outArr = [];
    const select3Nos = ()=>{

        outArr = [];
        var inds = [];

        if(nums > $array.length)
        {
            alert(`Array has only ${$array.length} elements, you are trying to get ${nums} elements.`);
            return;
        }
        for(var i=0; outArr.length < nums; i++)
        {
            var ind = Math.floor(Math.random() * $array.length);    //0,1,2,3 => 1
            if(inds.indexOf(ind) === -1)                           // inds = [2, 3, 1], outA = [54987, 234987, ]
            {
                inds = [...inds, ind];
                outArr = [...outArr, $array[ind]];
            }
        }

        console.log("selected without rep: "+outArr);
        OutputArr.set(outArr);
        flag.set(1);
    }

    const sampleWithRepetitions = ()=>{
     
        outArr = [];

        if(nums > $array.length)
        {
            alert(`Array has only ${$array.length} elements, you are trying to get ${nums} elements.`);
            return;
        }
        for(var i=0; outArr.length < nums; i++)
        {
            var ind = Math.floor(Math.random() * $array.length);    //0,1,2,3 => 1
            outArr = [...outArr, $array[ind]];
        }
        
        console.log("selected with rep: "+outArr);
        OutputArr.set(outArr);
        flag.set(1);
    }

    const pickMore = ()=> {
        
        outArr = [];

        for(var i=0; i<nums; i++)
        {
            var ind = Math.floor(Math.random() * $array.length);    //0,1,2,3 => 1
            outArr = [...outArr, $array[ind]];
        }

        console.log("More elements: "+outArr);
        OutputArr.set(outArr);
        flag.set(1);
    }
</script>

<main>
    <div class="bg-teal-700 text-white w-96 px-1" style="height: 420px;">
        <p class="text-center font-bold">Pick A Number</p>
        <br>
        <p class="text-justify text-xs">
            Randomly choose a number from a list of numbers.
            You can also pick several random values at once, simply by specifying how manny of them you
            need in the options above. You can also choose a function that allows selecting one number
            more than once in the same sample. The input numbers can be written in a column, listed through a comma,
            or seperated by any other character</p>
        
        <div class="items-center mx-10">
            <button class="bg-teal-900 w-full text-xs" on:click={select3Nos}>
                Select n numbers
            </button>
        </div>
        
        <div class="items-center mx-10">
            <button class="bg-teal-900 w-full text-xs" on:click={sampleWithRepetitions}>
                Sampling with repetitions
            </button>
        </div>

        <div class="items-center mx-10">
            <button class="bg-teal-900 w-full text-xs" on:click={pickMore}>
                Pick more numbers than there are
            </button>
        </div>

        <hr class="m-2">

        <h4 class="text-sm">Required options</h4>
        <p class="text-xs">This is an online browser-based program for
            picking a number
        </p>

        <div class="content-center m-auto">
            <input type="text" class="bg-teal-900 m-2 h-5 rounded text-sm" placeholder="pick these many numbers" bind:value={nums}>
        </div>
        <!-- <input type="text" class="bg-teal-900 m-2 h-5 rounded text-sm" placeholder="\n">
        <p class="text-xs">Input numbers are seperated by this symbol(new line)</p> -->
        
        <!-- <label for="op4" class="text-white text-xs font-bold">
            <input type="checkbox" name="oprI" id="" bind:checked={fc}>
                {#if fc}
                    {sampleWithRepetitions}
                {/if}
                With Repetions
        </label> -->

        <!-- <p class="text-xs">Allowing choosing the same number for several time</p> -->

    </div>
</main>
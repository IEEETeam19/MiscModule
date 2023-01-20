<script>

  import Box1 from "./lib/box1.svelte";
  import Box3 from "./lib/box3.svelte";
  import {array} from "../src/stores/data.js";
  import {OutputArr, flag} from "../src/stores/outputData.js";
  import Box2 from "./lib/box2.svelte";
  import { each } from "svelte/internal";

  let arr = []; 
  export let a2 = [];
  a2 = $OutputArr;
  var a;
  var l = []; 
  
  const num = (event)=>{
    if(event.keyCode === 13)
    {
      a = event.target.value;
      l = [...l, a];
    }
  }
  
  // '349', '349\n3', '349\n3\n8', '349\n3\n8\n4', '349\n3\n8\n4\n89'
  const inputTake = function NL()
  {
    arr = [];
    var i,j,ind;
    i=j=0;
    var str="z";

    for(; i<l.length; i++)
    {
      var value;
      if(i == 0)
        value = parseInt(l[i], 10);

      else if(i > 0)
      {
        ind = l[i].lastIndexOf('\n');
        var strR = l[i].substring(ind+1);
        value = parseInt(strR, 10);
      }
      arr = [...arr, value]; 
    }
  
    array.set(arr);

    // console.log(arr);
    console.log("Actual Array: "+$array);

  }

  // document.getElementById("Op").innerHTML = "<p>Hello</p>";
  
</script>

<main>

<h2 class="font-bold text-center text-teal-900 text-lg">ONLINE NUMBER TOOLS</h2>
<p class="text-center text-sm m-1"> <span class="bg-black text-teal-400 rounded px-1">Miscellaneous Calculator</span> Choose from the following</p>

<div class="bg-black w-full h-96 my-5">
  <div class="text-white"> 
    </div>
    <div class="flex center-contents justify-evenly">
        <div class="text-teal-700 mx-20 text-center my-4">
            <p class="font-bold">INPUT</p>
            
            <textarea class="text-white bg-teal-600 w-96 h-72" name="" id="t1" cols="30" rows="10" on:keydown={num}></textarea>
            <div>
              <button on:click={inputTake} class="bg-teal-700 text-white rounded border-2 m-1 p-1 hover:bg-teal-900">SUBMIT</button>
            </div>
        </div>
        <div class="text-teal-700 mx-20 text-center my-4">
            <p class="font-bold">OUTPUT</p>
            <div class="bg-teal-600 w-96 h-72 text-white" id="Op">
              {#if $flag == 1}
                {#each $OutputArr as ele}
                  <ul>{ele}</ul>
                {/each}
              {/if}
          </div>
        </div>
    </div>
</div>

  <div class="flex content-center mx-3 justify-evenly">
    <Box1/>
    <Box2/>
    <Box3/>
  </div>
  <div class="text-center text-teal-800 font-bold">
    END
  </div>
</main>
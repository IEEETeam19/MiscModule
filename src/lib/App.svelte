<script>

  import Box1 from "./box1.svelte";
  import Box3 from "./box3.svelte";
  import {array} from "../stores/data.js";
  import {OutputArr, flag} from "../stores/outputData.js";
  import Box2 from "./box2.svelte";
  import { each } from "svelte/internal";
  // import Route1 from "../routes/route1.svelte";

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
  const inputTake = function NL()
    {
      arr = [];
      var i,j,ind;
      i=j=0;
      var str="z";
  
      for(; i<l.length; i++)
      {

        for(var a=0; a<l[i].length; a++)  // 1, 1 2, 1 2 3, 1 2 3 4
        {
            var value;
            if(a == 0)
                value = parseInt(l[i], 10);

            else if(a > 0)
            {
                var ele = l[i][a].substring(l[i][a].length - 1);
                value = parseInt(ele, 10);
            }
            arr = [...arr, value];
        }

        // var value;
        // if(i == 0)
        //   value = parseInt(l[i], 10);
  
        if(i > 0)
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

<main class="app">

  <!-- <div></div> -->
<h2 class="font-bold text-center text-teal-900 text-lg">ONLINE NUMBER TOOLS</h2>
<p class="text-center text-sm m-1"> <span class="bg-black text-teal-400 rounded px-1">Miscellaneous Calculator</span> Choose from the following</p>

<div class="bg-black w-full h-96 my-5">
  <div class="text-white"> 
    </div>
    <div class="flex center-contents justify-evenly">
        <div class="text-teal-700 mx-20 text-center my-4">
            <p class="font-bold">INPUT</p>
            
            <textarea style="resize: none;" class="text-white bg-teal-600 w-96 h-72" name="" id="t1" cols="30" rows="10" on:keydown={num}></textarea>
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
    <!-- <Box1/> -->
    <Box2/>
    <Box3/>
  </div>
  </main>
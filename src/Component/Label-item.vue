<template>
  <div>
    <a class="list-card js-member-droppable ui-droppable" href="#">
                <div class="list-card-details js-card-details">
                    <div class="list-card-labels js-card-labels">
                        <span class="card-label card-label-green mod-card-front"></span>
                    </div>
                    <span class="list-card-title js-card-name" dir="auto">
                    Team Crud
                </span>
                    <div class="badges">
                        <span class="js-badges"></span>
                        <span class="custom-field-front-badges js-custom-field-badges">
                    </span>
                        <span class="js-plugin-badges">
                        <span></span>
                        </span>
                    </div>
                    <div class="list-card-members js-list-card-members"></div>
                </div>
            </a>
  </div>
</template>

 <script>
 import { getBoard } from '../services/Board/index.js';

 export default {
   name:"labelitem",
 }
 </script>

function addTask(){
            const taskInput=document.getElementById('taskInput');
            const taskText=taskInput.value.trim();

            if(taskText==''){
                alert('please enter a task');
                return;
            }

            const taskList=document.getElementById('taskList');
            const listItem=document.createElement('li');

            const taskSpan=document.createElement('span');
            taskSpan.textContent=taskText;

            const completeButton=document.createElement('button');
            completeButton.innerHTML='✔';
            completeButton.onlick=()=>{
                taskSpan.classList.toggle('completed');
            }

            const removeButton=document.createElement('button');
            removeButton.innerHTML='Remove';
            removeButton.className='remove-btn';
            removeButton.onclick=()=>{
                taskList.removeChild(listItem);
            }

            listItem.appendChild(completeButton);
            listItem.appendChild(taskSpan);
            listItem.appendChild(removeButton);

            taskList.appendChild(listItem);

            taskInput.value='';

        }
//for loop:
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element)
    
}

//break and continue:
for (let i = 0; i <=20; i++) {
    if(i===5){
        console.log(`detected 5`)
        break;//=>gets out of the loop
    }
    if(i===4){
        console.log(`detected 5`)
        continue//=>skips the code ahead for this i  and moves for next i
    }
    console.log(`value of i is ${i}`);
    
}
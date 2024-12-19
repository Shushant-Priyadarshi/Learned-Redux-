
+++++++++++++++++++++++++++++++++++++ WORKFLOW +++++++++++++++++++++++++++++++++++++

1. Let say I have a button and a counter with initial value of 0 .
2. Now the button have a handleClick funtion which will going to update/increase the counter.
3. When I click the button a ACTION is DISPATCHED and it will call the increment function.
4. Now in order to update the counter from STORE , it will call a REDUCER function.
5. A REDUCER is just a function which have logic to update the state.
6. Then this REDUCER function updates the counter in the STORE and it will be updated in the UI.


+++++++++++++++++++++++++++++++++++++ STEPS FOR SETUP +++++++++++++++++++++++++++++++++++++

1. Create a STORE
2. Wrap the App.jsx or any component by using PROVIDER from react redux and pass the STORE as an
attribute.
3. Create a redux slice.
4. Slice => name, iniitalState , REDUCER => ACTIONS
5. export all the ACTIONS and REDUCER
6. Subscribe the store 
7. useSelector and Dispatch for using them

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


import React from "react";

const Blogs = () => {
  return (
    <div>
      <h3 className="text-center text-2xl text-primary">
        Questions And Answers
      </h3>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="card w-1/2 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              1. How will you improve the performance of a React Application?
            </h2>
            <p>
              Sometimes React App became larger and it takes too long to load
              and gives user an bad experience.There are some tips to improve
              performance of a react app.
            </p>
            <p>
              1. Windowing: Some when it need to load all data at once, it could
              take too long to load. One simple solution for this is
              windowing,instead of loading all data at once windowing let the
              website to load some data that could fit the window , when user
              scroll, other data automatically load. It can be done with
              react-window or react-virtualized.
            </p>
            <p>
              2. Pagination: It is kind of similar to windowing. It lets the
              website to load some data in a page and other data on another page
              . User can choose how many items he/she wants to see in a page.
            </p>
          </div>
        </div>
        <div className="card w-1/2 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              2. What are the different ways to manage a state in a React
              application?
            </h2>
            <p>
              States In a react application can only be sent to children
              components via props. But sometimes it need to share state with
              sibling as well . We can do it by lifting up states.We can simply
              diclare the state in a common parent component and use It in both
              child.{" "}
            </p>
            <p>
              sometimes we need to share a state to gran gran child component.
              We do props drilling that time,but it can be easily done with
              context api which is a built in function in react.
            </p>
            <p>
              Another way to do state management is with useQuery.It use cashing
              to save data after fetching with it and it has a refetch function
              to fetch again
            </p>
          </div>
        </div>

        <div className="card w-1/2 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              4. Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts ?
            </h2>
            <p>
              React thinks any change in the application as change of states if
              we want to display our change instantly, we have to diclare a
              state. React gives us a build in function named useState. This
              function returns two thing . An state and a function to change
              it.In the example products is a state which is an array has an
              initial value an empty array. if we want any change there we have
              to use the function given with it in this case useProducts If we
              pass any value in this function,it will be set as the value of
              products.
            </p>
          </div>
        </div>
        <div className="card w-1/2 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              5. You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?{" "}
            </h2>
            <p>
              {" "}
              I can easily do it with some cool es6 features like this
              products.find(product =`{">"}`
              (product.name).toLowerCase().includes("name")) since each product
              will have a unique name , so that i used array.find{" "}
            </p>
          </div>
        </div>
        <div className="card w-1/2 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              6. What is a unit test? Why should write unit tests?
            </h2>
            <p>
              Unit Testing: Unit testing means testing a part or component or
              event a function individually to validate that each unit of the
              software code performs as expected. One of the main benefits of
              unit testing is it helps to debug the code perfectly because it
              runs one peace of code at a time it also ensures that code meets
              quality standards before deploying.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

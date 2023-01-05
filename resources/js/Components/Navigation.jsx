import React from "react";

const Navigation = (props) => {
  const pageLinks = props.links;

  return (
    <section className="pt-8 flex flex-col gap-5 items-center w-full">
      {Object.keys(pageLinks).map((item) => {
        let iconTint =
          props.mainScreen === item ? "fill-primary-500" : "fill-primary-300";

        return pageLinks[item].sideNav ? (
          <div
            className={
              "cursor-pointer p-3.5 rounded-lg hover:shadow-lg dark:bg-white hover:stroke-2" +
              " hover:fill-primary-500 hover:translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300 " +
              iconTint
            }
            onClick={() => {
              props.changePage(item);
            }}
            title={pageLinks[item].title}
            key={item}
          >
            {props.mainScreen === item
              ? pageLinks[item].iconActive
              : pageLinks[item].icon}
          </div>
        ) : null;
      })}
    </section>
  );
};

export default Navigation;

export const  handleClickOutside = (event, props, listLinks, showServices, nav)  => {
    const navbarElement = props.navbar ;
    if (!listLinks.value.contains(event.target)) {
        showServices.value = false;
    }
    if (!navbarElement.contains(event.target)) {
        nav.value = false
    }
};

export const useHandleToggle = (nav, showServices, serviceActive) => {
    nav.value = false;
    showServices.value = false;
    serviceActive.value = false;
  };
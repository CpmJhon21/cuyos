function toggleOption(optionId, arrowId) {
            let option = document.getElementById(optionId);
            let arrow = document.getElementById(arrowId);
            if (option.style.display === "none" || option.style.display === "") {
                option.style.display = "table-row";
                arrow.innerHTML = "▲";
            } else {
                option.style.display = "none";
                arrow.innerHTML = "▼";
            }
        }

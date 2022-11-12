import { Center } from "@chakra-ui/react";

export function Video() {
    return (
        <center>
            <iframe 
                width="1200" 
                height="630" 
                src="https://www.youtube.com/embed/9WY38rjIJuA" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </center>
    );
}
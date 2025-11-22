import type { Project } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <CardTitle className="mb-2 font-headline">{project.title}</CardTitle>
        <p className="text-muted-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4 p-6 pt-0">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex w-full items-center justify-end gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View on GitHub</p>
              </TooltipContent>
            </Tooltip>
            {project.liveUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">Live Demo</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Live Demo</p>
                </TooltipContent>
              </Tooltip>
            )}
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

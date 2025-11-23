import type { Project } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 h-full hover:-translate-y-2">

      <div className="bg-slate-900 rounded-2xl overflow-hidden h-full flex flex-col relative z-10">

        <div className="h-64 bg-slate-800 relative overflow-hidden group-hover:h-72 transition-all duration-500">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            data-ai-hint={project.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 z-10"></div>
        </div>
        
        <div className="p-8 flex flex-col flex-grow text-center items-center">
          
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed text-lg">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8 mt-auto justify-center">
              {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-slate-800/50 border border-slate-700/50 text-slate-300 px-3 py-1">
                    {tag}
                  </Badge>
              ))}
          </div>
          
          <div className="flex items-center justify-center gap-4 pt-4 border-t border-slate-800/50 w-full">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" asChild className="text-slate-300 hover:text-white hover:bg-slate-800">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={20} /> <span className="ml-2">Code</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>View on GitHub</TooltipContent>
              </Tooltip>
              
              {project.liveUrl && (
                <Tooltip>
                  <TooltipTrigger asChild>
                     <Button variant="ghost" size="sm" asChild className="text-teal-400 hover:text-teal-300 hover:bg-teal-400/10">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          Live Demo <ExternalLink size={20} className="ml-2" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>View Live Demo</TooltipContent>
                </Tooltip>
              )}
            </TooltipProvider>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
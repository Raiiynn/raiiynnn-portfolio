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
    <div className="bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-teal-500/30 hover:shadow-2xl hover:shadow-teal-900/20 transition-all group flex flex-col h-full">
      <div className="h-52 bg-slate-800 relative overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          data-ai-hint={project.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10"></div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
            {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="bg-teal-500/10 border border-teal-500/20 text-teal-300">
                  {tag}
                </Badge>
            ))}
        </div>
        
        <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" asChild className="text-slate-300 hover:text-white">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={18} /> Code
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>View on GitHub</TooltipContent>
            </Tooltip>
            {project.liveUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                   <Button variant="ghost" size="sm" asChild className="text-teal-400 hover:text-teal-300 ml-auto">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink size={18} />
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
  );
};

export default ProjectCard;

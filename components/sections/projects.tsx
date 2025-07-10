/* eslint-disable react/no-unescaped-entities */
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Star, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import bibliotrackerImage from '@/public/images/projects/bibliotracker.png';
import projet1Image from '@/public/images/projects/EnCours.png';
import todolistImage from '@/public/images/projects/todolist.png';
import recipeImage from '@/public/images/projects/recipe.png';

const projects = [
	{
		id: 'bibliotracker',
		title: 'BiblioTracker',
		description:
			'Application de gestion de bibliothèque personnelle permettant aux utilisateurs de cataloguer, organiser et suivre leurs collections de livres.',
		longDescription:
			'Une application web complète offrant une expérience utilisateur intuitive pour gérer sa bibliothèque personnelle. Fonctionnalités incluant la recherche avancée, les recommandations personnalisées.',
		image: bibliotrackerImage,
		tags: ['Next.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
		liveUrl: 'https://bibliotracker.fr',
		featured: true,
		stats: {
			status: 'En ligne',
			progress: '100%',
		},
		githubUrl: undefined, // Pas de code source disponible pour ce projet
	},
	{
		id: 'livre-recettes',
		title: 'Livre de Recettes',
		description:
			'Application web moderne pour découvrir et organiser des recettes culinaires avec un système de filtres et de tri avancé.',
		longDescription:
			'Une plateforme complète de recettes offrant une collection de plats traditionnels et modernes. Avec un système de filtrage par catégorie, difficulté et temps de préparation, cette application permet aux utilisateurs de trouver facilement la recette parfaite.',
		image: recipeImage,
		tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Responsive'],
		liveUrl: 'https://livrederecette.netlify.app',
		stats: {
			status: 'En ligne',
			progress: '100%',
		},
		githubUrl: 'https://github.com/ValH-code/Recipe',
	},
	{
		id: 'gestionnaire-taches',
		title: 'Gestionnaire de Tâches',
		description:
			'Application intuitive de gestion des tâches permettant d\'organiser et suivre efficacement ses activités quotidiennes.',
		longDescription:
			'Un outil simple et efficace pour la gestion des tâches quotidiennes. Cette application permet de créer, modifier, marquer comme complétées et supprimer des tâches avec une interface utilisateur moderne et responsive.',
		image: todolistImage,
		tags: ['Next.js', 'React', 'Local Storage', 'Tailwind', 'PWA'],
		liveUrl: 'https://listedetaches.netlify.app',
		stats: {
			status: 'En ligne',
			progress: '100%',
		},
		githubUrl: 'https://github.com/ValH-code/ToDoList',
	},
	{
		id: 'coming-soon-1',
		title: 'À venir',
		description:
			'Un nouveau projet passionnant est en cours de développement. Restez à l\'écoute pour plus d\'informations.',
		longDescription:
			'Ce projet innovant utilisera les dernières technologies web pour créer une expérience utilisateur unique. Plus de détails seront révélés prochainement.',
		image: projet1Image,
		tags: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
		stats: {
			status: 'En cours',
			progress: '60%',
		},
		githubUrl: undefined,
	},
];

export default function Projects() {
	return (
		<div className="container px-4">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center mb-16"
			>
				<h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h2>
				<div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
				<p className="text-muted-foreground max-w-2xl mx-auto">
					Une sélection de projets sur lesquels j'ai travaillé, démontrant mes compétences et mon expertise.
				</p>
			</motion.div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.2 }}
						className={project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
					>
						<Card className="h-full flex flex-col overflow-hidden border-border/50 group hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
							<div className="relative h-48 overflow-hidden">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-contain transition-transform duration-500 group-hover:scale-105"
								/>
								{project.featured && (
									<div className="absolute top-2 right-2">
										<Badge
											variant="secondary"
											className="bg-primary text-primary-foreground flex items-center gap-1"
										>
											<Star className="h-3 w-3" /> Projet phare
										</Badge>
									</div>
								)}
								{project.id.startsWith('coming-soon') && (
									<div className="absolute top-2 right-2">
										<Badge
											variant="secondary"
											className="bg-muted text-muted-foreground flex items-center gap-1"
										>
											<Clock className="h-3 w-3" /> En développement
										</Badge>
									</div>
								)}
							</div>

							<CardHeader>
								<CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center gap-2">
									{project.title}
								</CardTitle>
								<CardDescription className="line-clamp-2">
									{project.description}
								</CardDescription>
							</CardHeader>

							<CardContent className="flex-grow">
								<div className="space-y-4">
									<p className="text-sm text-muted-foreground">
										{project.longDescription}
									</p>

									{project.stats && (
										<div className="grid grid-cols-2 gap-4 py-4 border-y border-border/50">
											{Object.entries(project.stats).map(([key, value]) => (
												<div key={key} className="text-center">
													<div className="text-lg font-semibold text-primary">
														{value}
													</div>
													<div className="text-xs text-muted-foreground capitalize">
														{key}
													</div>
												</div>
											))}
										</div>
									)}

									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag) => (
											<Badge
												key={tag}
												variant="outline"
												className="text-xs transition-colors hover:bg-primary hover:text-primary-foreground"
											>
												{tag}
											</Badge>
										))}
									</div>
								</div>
							</CardContent>

							<CardFooter className="flex gap-2 pt-4">
								{project.liveUrl && (
									<Button
										asChild
										variant="default"
										size="sm"
										className="flex-1 transition-transform hover:scale-105"
									>
										<Link
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2"
										>
											<ExternalLink className="h-4 w-4" /> Voir le site
										</Link>
									</Button>
								)}
								{project.githubUrl && (
									<Button
										asChild
										variant="outline"
										size="sm"
										className="flex-1 transition-transform hover:scale-105"
									>
										<Link
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2"
										>
											<Github className="h-4 w-4" /> Code source
										</Link>
									</Button>
								)}
							</CardFooter>
						</Card>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.4 }}
				className="mt-16 text-center"
			>
				<p className="text-muted-foreground mb-6">
					Découvrez plus de projets et contributions sur mon GitHub
				</p>
				<Button
					asChild
					variant="outline"
					className="transition-transform hover:scale-105"
				>
					<Link
						href="https://github.com/ValH-code"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2"
					>
						<Github className="h-4 w-4" /> Plus de projets sur GitHub
					</Link>
				</Button>
			</motion.div>
		</div>
	);
}
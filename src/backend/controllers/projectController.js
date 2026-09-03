import { NextResponse } from "next/server";
import connectDB from "@/backend/config/db";
import Project from "@/backend/models/Project";

export async function getProjects() {
  try {
    await connectDB();
    const projects = await Project.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(
      {
        success: true,
        count: projects.length,
        data: projects,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function createProject(req) {
  try {
    await connectDB();
    const body = await req.json();

    const title = body.title;
    const description = body.description;
    const technologies = body.technologies;
    const githubUrl = body.githubUrl;
    const liveUrl = body.liveUrl;
    const featured = body.featured;

    if (!title || !description) {
      return NextResponse.json(
        {
          success: false,
          error: "Title and description are required fields",
        },
        {
          status: 400,
        }
      );
    }

    const projectData = {
      title: title.trim(),
      description: description.trim(),
      technologies: Array.isArray(technologies) ? technologies : [],
      githubUrl: githubUrl ? githubUrl.trim() : "",
      liveUrl: liveUrl ? liveUrl.trim() : "",
      featured: Boolean(featured),
    };

    const newProject = await Project.create(projectData);

    return NextResponse.json(
      {
        success: true,
        message: "Project created successfully",
        data: newProject,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

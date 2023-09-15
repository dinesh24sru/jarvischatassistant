import React from 'react';
import { Grid, Divider } from '@mui/material';
import { PaperItem, Lable, TagChip } from '../../ui-components/atom';
import PersonIcon from '@mui/icons-material/Person';
import Tooltips from '../../ui-components/wrapper/tooltip';

function PromptLib() {
  const prompt = [
    {
      name: 'Maria Rodriguez',
      description:
        'Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions. Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions. Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions. Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions. Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions. ',
      prompt: 'Describe the perfect day at the beach.',
      parameters: {
        param1: 'Value 1',
        param2: 'Value 2',
      },
      category: ['Category A', 'Category B'],
      tags: ['Tag 1', 'Tag 2'],
    },
    {
      name: 'James Brown',
      description:
        'Create a unique superhero with extraordinary abilities and narrate their journey from ordinary to extraordinary. Create a unique superhero with extraordinary abilities and narrate their journey from ordinary to extraordinary. Create a unique superhero with extraordinary abilities and narrate their journey from ordinary to extraordinary.Create a unique superhero with extraordinary abilities and narrate their journey from ordinary to extraordinary. Create a unique superhero with extraordinary abilities and narrate their journey from ordinary to extraordinary. Create a unique superhero with extraordinary abilities and narrate their journey from ordinary to extraordinary.',
      prompt: 'PInvent a new superhero and tell their origin story.',
      parameters: {
        param1: 'Value 1',
        param2: 'Value 2',
      },
      category: ['Category B', 'Category C'],
      tags: ['Tag 2', 'Tag 3'],
    },
    {
      name: 'Emma White',
      description:
        'Reflect on your aspirations and goals in a heartfelt letter addressed to your future self Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions. Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions. Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.',
      prompt: 'Write a letter to your future self',
      parameters: {
        param1: 'Value 1',
        param2: 'Value 2',
      },
      category: ['Category A', 'Category C'],
      tags: ['Tag 1', 'Tag 3'],
    },
    {
      name: 'Object 4',
      description:
        'Description for Object 4 Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions. Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions. Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.',
      prompt: 'Prompt for Object 4',
      parameters: {
        param1: 'Value 1',
        param2: 'Value 2',
      },
      category: ['Category A', 'Category B'],
      tags: ['Tag 2', 'Tag 3'],
    },
    {
      name: 'Object 5',
      description:
        'Description for Object 5 Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions. Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions. Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions. Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions. Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.',
      prompt: 'Prompt for Object 5',
      parameters: {
        param1: 'Value 1',
        param2: 'Value 2',
      },
      category: ['Category B', 'Category C'],
      tags: ['Tag 1', 'Tag 2'],
    },
    {
      name: 'Object 6',
      description:
        'Description for Object 6 Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions. Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.',
      prompt: 'Prompt for Object 6',
      parameters: {
        param1: 'Value 1',
        param2: 'Value 2',
      },
      category: ['Category A', 'Category C'],
      tags: ['Tag 2', 'Tag 3'],
    },
    {
      name: 'Object 7',
      description:
        'Description for Object 7 Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.',
      prompt: 'Prompt for Object 7',
      parameters: {
        param1: 'Value 1',
        param2: 'Value 2',
      },
      category: ['Category A', 'Category B'],
      tags: ['Tag 1', 'Tag 3'],
    },
    {
      name: 'Object 8',
      description:
        'Description for Object 8 Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.Write about a relaxing day by the ocean, capturing the sights, sounds, and emotions.',
      prompt: 'Prompt for Object 8',
      parameters: {
        param1: 'Value 1',
        param2: 'Value 2',
      },
      category: ['Category B', 'Category C'],
      tags: ['Tag 2', 'Tag 3'],
    },
    {
      name: 'Object 9',
      description: 'Description for Object 9',
      prompt: 'Prompt for Object 9',
      parameters: {
        param1: 'Value 1',
        param2: 'Value 2',
      },
      category: ['Category A', 'Category C'],
      tags: ['Tag 1', 'Tag 2'],
    },
    {
      name: 'Object 10',
      description: 'Description for Object 10',
      prompt: 'Prompt for Object 10',
      parameters: {
        param1: 'Value 1',
        param2: 'Value 2',
      },
      category: ['Category A', 'Category B'],
      tags: ['Tag 1', 'Tag 3'],
    },
    {
      name: 'Object 11',
      description: 'Description for Object 11',
      prompt: 'Prompt for Object 11',
      parameters: {
        param1: 'Value 1',
        param2: 'Value 2',
      },
      category: ['Category B', 'Category C'],
      tags: ['Tag 2', 'Tag 3'],
    },
    {
      name: 'Object 12',
      description: 'Description for Object 12',
      prompt: 'Prompt for Object 12',
      parameters: {
        param1: 'Value 1',
        param2: 'Value 2',
      },
      category: ['Category A', 'Category C'],
      tags: ['Tag 1', 'Tag 2'],
    },
    {
      name: 'Object 13',
      description: 'Description for Object 13',
      prompt: 'Prompt for Object 13',
      parameters: {
        param1: 'Value 1',
        param2: 'Value 2',
      },
      category: ['Category A', 'Category B'],
      tags: ['Tag 1', 'Tag 3'],
    },
    {
      name: 'Object 14',
      description: 'Description for Object 14',
      prompt: 'Prompt for Object 14',
      parameters: {
        param1: 'Value 1',
        param2: 'Value 2',
      },
      category: ['Category B', 'Category C'],
      tags: ['Tag 2', 'Tag 3'],
    },
    {
      name: 'Object 15',
      description: 'Description for Object 15',
      prompt: 'Prompt for Object 15',
      parameters: {
        param1: 'Value 1',
        param2: 'Value 2',
      },
      category: ['Category A', 'Category C'],
      tags: ['Tag 1', 'Tag 2'],
    },
    {
      name: 'Object 16',
      description: 'Description for Object 16',
      prompt: 'Prompt for Object 16',
      parameters: {
        param1: 'Value 1',
        param2: 'Value 2',
      },
      category: ['Category A', 'Category B'],
      tags: ['Tag 1', 'Tag 3'],
    },
    {
      name: 'Object 17',
      description: 'Description for Object 17',
      prompt: 'Prompt for Object 17',
      parameters: {
        param1: 'Value 1',
        param2: 'Value 2',
      },
      category: ['Category B', 'Category C'],
      tags: ['Tag 2', 'Tag 3'],
    },
  ];
  return (
    <Grid container className='page-grid' spacing={2}>
      <Grid item xs={12}>
        Filter
      </Grid>
      {prompt.map((p, i) => {
        return (
          <Grid key={`${p.name}_${i}`} item xs={12} md={4}>
            <PaperItem style={{ height: '400px', textAlign: 'start' }}>
              <Grid container spacing={1}>
                <Grid item xs={12} style={{ height: '32px' }}>
                  <Lable variant={'h5'} label={p.name} />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item xs={12} style={{ height: '65px' }}>
                  <Lable variant={'h6'} label={p.prompt} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    height: '165px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Tooltips title={p.description}>
                    <Lable variant={'p'} label={p.description} />
                  </Tooltips>
                </Grid>

                <Grid item xs={12}>
                  {p.tags.map((tag, t) => {
                    return (
                      <TagChip
                        style={{ margin: '2px' }}
                        key={`${tag}_${t}`}
                        label={tag}
                      />
                    );
                  })}
                </Grid>
                <Grid item xs={12}>
                  {p.category.map((cat, c) => {
                    return (
                      <TagChip
                        style={{ margin: '2px' }}
                        key={`${cat}_${c}`}
                        label={cat}
                      />
                    );
                  })}
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    style={{ height: '32px' }}
                    alignItems='center'
                  >
                    <Grid item xs={6}>
                      <PersonIcon /> <Lable variant={'p'} label='User2' />
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: 'end' }}>
                      <Lable variant={'p'} label='Version : 1.1.2' />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </PaperItem>
          </Grid>
        );
      })}
    </Grid>
  );
}

export { PromptLib };

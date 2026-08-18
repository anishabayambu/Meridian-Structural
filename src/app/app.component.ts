import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  code: string;
  title: string;
  copy: string;
}

interface ProjectStat {
  label: string;
  value: string;
}

interface Project {
  year: string;
  type: string;
  name: string;
  copy: string;
  stats: ProjectStat[];
}

interface ProcessStep {
  title: string;
  copy: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  year = new Date().getFullYear();
  navOpen = false;
  scrolled = false;
  submitted = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 24;
  }

  closeNav(): void {
    this.navOpen = false;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted = true;
    (event.target as HTMLFormElement).reset();
  }

  services: Service[] = [
    {
      code: '01',
      title: 'Structural design',
      copy: 'Full gravity and lateral system design for new construction, from foundations to roof framing, delivered as stamped construction documents.'
    },
    {
      code: '02',
      title: 'Retrofit & renovation',
      copy: 'Seismic upgrades, additions and adaptive reuse work on existing structures, including load-path verification for buildings with no original drawings.'
    },
    {
      code: '03',
      title: 'Assessment & inspection',
      copy: 'Condition surveys, forensic investigation and peer review for lenders, insurers and owners who need an independent read on structural risk.'
    },
    {
      code: '04',
      title: 'Construction administration',
      copy: 'On-site review through framing and steel erection, RFI response, and submittal review to keep the built structure matched to the design.'
    }
  ];

  projects: Project[] = [
    {
      year: '2025',
      type: 'Transit infrastructure',
      name: 'Northfield Transit Hub',
      copy: 'Long-span steel canopy and platform structure for a five-line interchange, designed for a 75-year service life under continuous vibration loading.',
      stats: [
        { label: 'Clear span', value: '42m' },
        { label: 'Steel tonnage', value: '860t' },
        { label: 'Design phase', value: '11 mo' }
      ]
    },
    {
      year: '2023',
      type: 'Mixed-use housing',
      name: 'Foundry Row Residences',
      copy: 'Podium-over-parking structure for 128 residential units above ground-floor retail, with a transfer level carrying six stories of wood-frame construction.',
      stats: [
        { label: 'Units', value: '128' },
        { label: 'Stories', value: '7' },
        { label: 'Transfer beams', value: '14' }
      ]
    },
    {
      year: '2022',
      type: 'Seismic retrofit',
      name: 'Ashworth Elementary',
      copy: 'Full seismic upgrade of a 1948 unreinforced masonry school building, completed in phases over two summers to avoid disrupting the academic year.',
      stats: [
        { label: 'Building age', value: '76 yrs' },
        { label: 'Downtime', value: '0 school days' },
        { label: 'Shear walls added', value: '22' }
      ]
    }
  ];

  processSteps: ProcessStep[] = [
    {
      title: 'Site survey & program review',
      copy: 'We walk the site, review existing drawings or geotechnical reports, and confirm the loads, spans and constraints the design has to satisfy.'
    },
    {
      title: 'Scheme & system selection',
      copy: 'We propose one to three structural systems with rough costing implications, so the framing decision gets made before it gets expensive to change.'
    },
    {
      title: 'Analysis & documentation',
      copy: 'Full calculation set and stamped construction documents, issued in coordination with the architect and MEP engineers through each design phase.'
    },
    {
      title: 'Permitting support',
      copy: 'We respond directly to plan-check comments and attend hearings where needed, so structural questions don\'t stall the permit.'
    },
    {
      title: 'Construction administration',
      copy: 'Site visits at key milestones, RFI turnaround inside 48 hours, and a final letter of structural completion at closeout.'
    }
  ];
}

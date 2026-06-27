import { SkillGroup } from '../components/SkillBadge';
import { SectionHeader } from '../components/SectionHeader';
import { skillGroups } from '../data/skills';

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHeader
        label="Skills"
        title="Technical Skills"
        description="Security frameworks, network defense, tools, infrastructure systems, and programming foundations."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} title={group.title} skills={group.skills} />
        ))}
      </div>
    </section>
  );
}

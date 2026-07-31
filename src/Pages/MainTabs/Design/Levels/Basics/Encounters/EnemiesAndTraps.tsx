import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const EnemiesAndTraps = () => {
  const markdownFilePath = 'Design/Levels/Basics/Encounters/EnemiesAndTraps';

  return (
    <>
      <PageLayout>
        <PageTitle title="Enemies & Traps" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnemiesAndTraps;

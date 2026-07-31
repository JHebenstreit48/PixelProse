import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath = 'Engines/Godot/Basics/Fundamentals/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fundamentals: Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;

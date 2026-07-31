import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const CharacterControllers = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Physics/CharacterControllers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Character Controllers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CharacterControllers;

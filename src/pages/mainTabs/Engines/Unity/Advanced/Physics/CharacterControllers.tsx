import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ActorsAndComponents = () => {
  const markdownFilePath = 'Engines/Unreal/Basics/GameplayFramework/ActorsAndComponents';

  return (
    <>
      <PageLayout>
        <PageTitle title="Actors & Components" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ActorsAndComponents;

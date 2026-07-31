import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NetcodeForGameObjects = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Networking/NetcodeForGameObjects';

  return (
    <>
      <PageLayout>
        <PageTitle title="Netcode for GameObjects" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetcodeForGameObjects;

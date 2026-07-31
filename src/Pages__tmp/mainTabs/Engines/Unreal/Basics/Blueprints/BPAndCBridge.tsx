import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const BPAndCBridge = () => {
  const markdownFilePath = 'Engines/Unreal/Basics/Blueprints/BPAndCBridge';

  return (
    <>
      <PageLayout>
        <PageTitle title="BP & C++ Bridge" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BPAndCBridge;

import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

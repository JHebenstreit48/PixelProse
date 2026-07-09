import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

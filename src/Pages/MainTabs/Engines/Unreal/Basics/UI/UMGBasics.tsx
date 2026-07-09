import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UMGBasics = () => {
  const markdownFilePath = 'Engines/Unreal/Basics/UI/UMGBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="UMG Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UMGBasics;

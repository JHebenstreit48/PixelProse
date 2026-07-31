import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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

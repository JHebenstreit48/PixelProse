import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UMGBasics = () => {
  const markdownFilePath = 'Engines/Unreal/Basics/UI/UMGBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="UMG Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UMGBasics;

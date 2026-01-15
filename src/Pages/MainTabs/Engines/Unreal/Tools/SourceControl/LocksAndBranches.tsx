import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LocksAndBranches = () => {
  const markdownFilePath = 'Engines/Unreal/Tools/SourceControl/LocksAndBranches';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Locks & Branches" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LocksAndBranches;

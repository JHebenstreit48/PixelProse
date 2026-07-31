import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const LocksAndBranches = () => {
  const markdownFilePath = 'Engines/Cry/Tools/SourceControl/LocksAndBranches';

  return (
    <>
      <PageLayout>
        <PageTitle title="Locks & Branches" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LocksAndBranches;

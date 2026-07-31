import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

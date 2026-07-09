import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PerforceGit = () => {
  const markdownFilePath = 'Engines/Cry/Tools/SourceControl/PerforceGit';

  return (
    <>
      <PageLayout>
        <PageTitle title="Perforce/Git" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PerforceGit;

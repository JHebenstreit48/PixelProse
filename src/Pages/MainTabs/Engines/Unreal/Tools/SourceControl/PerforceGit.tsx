import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PerforceGit = () => {
  const markdownFilePath = 'Engines/Unreal/Tools/SourceControl/PerforceGit';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Perforce/Git" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PerforceGit;

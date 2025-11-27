import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Chocolatey = () => {
  const markdownFilePath =
    'Languages/CFamily/CSharp/Tools/Packages/Chocolatey';

  return (
    <PageLayout>
      <Header />
      <PageTitle title="C# Tools - Chocolatey" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default Chocolatey;
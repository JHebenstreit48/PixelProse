import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Chocolatey = () => {
  const markdownFilePath =
    'Languages/CFamily/CSharp/Tools/Packages/Chocolatey';

  return (
    <PageLayout>
      <PageTitle title="C# Tools - Chocolatey" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default Chocolatey;
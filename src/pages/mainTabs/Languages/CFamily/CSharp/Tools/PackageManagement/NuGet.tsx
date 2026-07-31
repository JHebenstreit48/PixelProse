import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const NuGet = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/Packages/NuGet';

  return (
    <PageLayout>
      <PageTitle title="C# Tools - NuGet" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default NuGet;
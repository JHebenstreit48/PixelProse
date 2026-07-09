import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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